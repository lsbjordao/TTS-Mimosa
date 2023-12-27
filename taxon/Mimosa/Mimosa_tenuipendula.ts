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


// Description of Mimosa tenuipendula
const Mimosa_tenuipendula = new Mimosa()
Mimosa_tenuipendula.specificEpithet = 'tenuipendula'

Mimosa_tenuipendula.stems = new Stems()

Mimosa_tenuipendula.stipule = new Stipule()
Mimosa_tenuipendula.stipule.margin = new MarginStipule()
Mimosa_tenuipendula.stipule.adaxial = new AdaxialStipule()
Mimosa_tenuipendula.stipule.abaxial = new AbaxialStipule()

Mimosa_tenuipendula.leaf = new Leaf()
Mimosa_tenuipendula.leaf.petiole = new Petiole()
Mimosa_tenuipendula.leaf.bipinnate = new Bipinnate()
Mimosa_tenuipendula.leaf.bipinnate.rachis = new Rachis()
Mimosa_tenuipendula.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_tenuipendula.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_tenuipendula.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_tenuipendula.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_tenuipendula.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_tenuipendula.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_tenuipendula.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_tenuipendula.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_tenuipendula.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_tenuipendula.inflorescence = new Inflorescence()
Mimosa_tenuipendula.inflorescence.peduncle = new Peduncle()
Mimosa_tenuipendula.inflorescence.capitate = new CapitateInflorescence()

Mimosa_tenuipendula.flower = new Flower()
Mimosa_tenuipendula.flower.bracteole = new Bracteole()
Mimosa_tenuipendula.flower.merism = '4-merous'
Mimosa_tenuipendula.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_tenuipendula.flower.calyx = new Calyx()
Mimosa_tenuipendula.flower.corolla = new Corolla()

Mimosa_tenuipendula.androecium = new Androecium()
Mimosa_tenuipendula.androecium.filaments = new Filaments()
Mimosa_tenuipendula.androecium.filaments.colour = 'pinkish'

Mimosa_tenuipendula.ginoecium = new Ginoecium()
Mimosa_tenuipendula.ginoecium.ovary = new Ovary()

Mimosa_tenuipendula.fruit = new Fruit()
Mimosa_tenuipendula.fruit.stipe = new Stipe()
Mimosa_tenuipendula.fruit.replum = new Replum()
Mimosa_tenuipendula.fruit.epicarp = new Epicarp()

Mimosa_tenuipendula.seed = new Seed()


// Description authorship
Mimosa_tenuipendula.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_tenuipendula.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa tenuipendula
export { Mimosa_tenuipendula }