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


// Description of Mimosa pusilliceps
const Mimosa_pusilliceps = new Mimosa()
Mimosa_pusilliceps.specificEpithet = 'pusilliceps'

Mimosa_pusilliceps.stems = new Stems()

Mimosa_pusilliceps.stipule = new Stipule()
Mimosa_pusilliceps.stipule.margin = new MarginStipule()
Mimosa_pusilliceps.stipule.adaxial = new AdaxialStipule()
Mimosa_pusilliceps.stipule.abaxial = new AbaxialStipule()

Mimosa_pusilliceps.leaf = new Leaf()
Mimosa_pusilliceps.leaf.petiole = new Petiole()
Mimosa_pusilliceps.leaf.bipinnate = new Bipinnate()
Mimosa_pusilliceps.leaf.bipinnate.rachis = new Rachis()
Mimosa_pusilliceps.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pusilliceps.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pusilliceps.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_pusilliceps.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pusilliceps.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pusilliceps.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pusilliceps.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pusilliceps.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pusilliceps.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pusilliceps.inflorescence = new Inflorescence()
Mimosa_pusilliceps.inflorescence.peduncle = new Peduncle()
Mimosa_pusilliceps.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pusilliceps.flower = new Flower()
Mimosa_pusilliceps.flower.bracteole = new Bracteole()
Mimosa_pusilliceps.flower.merism = '4-merous'
Mimosa_pusilliceps.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pusilliceps.flower.calyx = new Calyx()
Mimosa_pusilliceps.flower.corolla = new Corolla()

Mimosa_pusilliceps.androecium = new Androecium()
Mimosa_pusilliceps.androecium.filaments = new Filaments()
Mimosa_pusilliceps.androecium.filaments.colour = 'pinkish'

Mimosa_pusilliceps.ginoecium = new Ginoecium()
Mimosa_pusilliceps.ginoecium.ovary = new Ovary()

Mimosa_pusilliceps.fruit = new Fruit()
Mimosa_pusilliceps.fruit.stipe = new Stipe()
Mimosa_pusilliceps.fruit.replum = new Replum()
Mimosa_pusilliceps.fruit.epicarp = new Epicarp()

Mimosa_pusilliceps.seed = new Seed()


// Description authorship
Mimosa_pusilliceps.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pusilliceps.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa pusilliceps
export { Mimosa_pusilliceps }