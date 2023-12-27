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


// Description of Mimosa hilariana
const Mimosa_hilariana = new Mimosa()
Mimosa_hilariana.specificEpithet = 'hilariana'

Mimosa_hilariana.stems = new Stems()

Mimosa_hilariana.stipule = new Stipule()
Mimosa_hilariana.stipule.margin = new MarginStipule()
Mimosa_hilariana.stipule.adaxial = new AdaxialStipule()
Mimosa_hilariana.stipule.abaxial = new AbaxialStipule()

Mimosa_hilariana.leaf = new Leaf()
Mimosa_hilariana.leaf.petiole = new Petiole()
Mimosa_hilariana.leaf.bipinnate = new Bipinnate()
Mimosa_hilariana.leaf.bipinnate.rachis = new Rachis()
Mimosa_hilariana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_hilariana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_hilariana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_hilariana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_hilariana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_hilariana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_hilariana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_hilariana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_hilariana.inflorescence = new Inflorescence()
Mimosa_hilariana.inflorescence.peduncle = new Peduncle()
Mimosa_hilariana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_hilariana.flower = new Flower()
Mimosa_hilariana.flower.bracteole = new Bracteole()
Mimosa_hilariana.flower.merism = '4-merous'
Mimosa_hilariana.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_hilariana.flower.calyx = new Calyx()
Mimosa_hilariana.flower.corolla = new Corolla()
Mimosa_hilariana.flower.corolla.shape = 'turbinate'

Mimosa_hilariana.androecium = new Androecium()
Mimosa_hilariana.androecium.filaments = new Filaments()

Mimosa_hilariana.ginoecium = new Ginoecium()
Mimosa_hilariana.ginoecium.ovary = new Ovary()

Mimosa_hilariana.fruit = new Fruit()
Mimosa_hilariana.fruit.stipe = new Stipe()
Mimosa_hilariana.fruit.replum = new Replum()
Mimosa_hilariana.fruit.epicarp = new Epicarp()

Mimosa_hilariana.seed = new Seed()


// Description authorship
Mimosa_hilariana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_hilariana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa hilariana
export { Mimosa_hilariana }