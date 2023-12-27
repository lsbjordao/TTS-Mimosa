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


// Description of Mimosa prorepens
const Mimosa_prorepens = new Mimosa()
Mimosa_prorepens.specificEpithet = 'prorepens'

Mimosa_prorepens.stems = new Stems()

Mimosa_prorepens.stipule = new Stipule()
Mimosa_prorepens.stipule.margin = new MarginStipule()
Mimosa_prorepens.stipule.adaxial = new AdaxialStipule()
Mimosa_prorepens.stipule.abaxial = new AbaxialStipule()

Mimosa_prorepens.leaf = new Leaf()
Mimosa_prorepens.leaf.petiole = new Petiole()
Mimosa_prorepens.leaf.bipinnate = new Bipinnate()
Mimosa_prorepens.leaf.bipinnate.rachis = new Rachis()
Mimosa_prorepens.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_prorepens.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_prorepens.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_prorepens.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_prorepens.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_prorepens.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_prorepens.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_prorepens.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_prorepens.inflorescence = new Inflorescence()
Mimosa_prorepens.inflorescence.peduncle = new Peduncle()
Mimosa_prorepens.inflorescence.capitate = new CapitateInflorescence()

Mimosa_prorepens.flower = new Flower()
Mimosa_prorepens.flower.bracteole = new Bracteole()
Mimosa_prorepens.flower.merism = '4-merous'
Mimosa_prorepens.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_prorepens.flower.calyx = new Calyx()
Mimosa_prorepens.flower.corolla = new Corolla()

Mimosa_prorepens.androecium = new Androecium()
Mimosa_prorepens.androecium.filaments = new Filaments()

Mimosa_prorepens.ginoecium = new Ginoecium()
Mimosa_prorepens.ginoecium.ovary = new Ovary()

Mimosa_prorepens.fruit = new Fruit()
Mimosa_prorepens.fruit.stipe = new Stipe()
Mimosa_prorepens.fruit.replum = new Replum()
Mimosa_prorepens.fruit.epicarp = new Epicarp()

Mimosa_prorepens.seed = new Seed()


// Description authorship
Mimosa_prorepens.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_prorepens.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa prorepens
export { Mimosa_prorepens }