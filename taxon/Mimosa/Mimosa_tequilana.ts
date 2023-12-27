// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa tequilana
const Mimosa_tequilana = new Mimosa()
Mimosa_tequilana.specificEpithet = 'tequilana'

Mimosa_tequilana.stems = new Stems()

Mimosa_tequilana.stipule = new Stipule()
Mimosa_tequilana.stipule.margin = new MarginStipule()
Mimosa_tequilana.stipule.adaxial = new AdaxialStipule()
Mimosa_tequilana.stipule.abaxial = new AbaxialStipule()

Mimosa_tequilana.leaf = new Leaf()
Mimosa_tequilana.leaf.petiole = new Petiole()
Mimosa_tequilana.leaf.bipinnate = new Bipinnate()
Mimosa_tequilana.leaf.bipinnate.rachis = new Rachis()
Mimosa_tequilana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_tequilana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_tequilana.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_tequilana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_tequilana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_tequilana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_tequilana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_tequilana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_tequilana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_tequilana.inflorescence = new Inflorescence()
Mimosa_tequilana.inflorescence.peduncle = new Peduncle()
Mimosa_tequilana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_tequilana.flower = new Flower()
Mimosa_tequilana.flower.bracteole = new Bracteole()
Mimosa_tequilana.flower.calyx = new Calyx()
Mimosa_tequilana.flower.corolla = new Corolla()

Mimosa_tequilana.androecium = new Androecium()
Mimosa_tequilana.androecium.filaments = new Filaments()

Mimosa_tequilana.ginoecium = new Ginoecium()
Mimosa_tequilana.ginoecium.ovary = new Ovary()

Mimosa_tequilana.fruit = new Fruit()
Mimosa_tequilana.fruit.stipe = new Stipe()
Mimosa_tequilana.fruit.replum = new Replum()
Mimosa_tequilana.fruit.epicarp = new Epicarp()

Mimosa_tequilana.seed = new Seed()


// Description authorship
Mimosa_tequilana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_tequilana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa tequilana
export { Mimosa_tequilana }